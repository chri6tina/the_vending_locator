const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { 
      subject, 
      htmlContent, 
      textContent, 
      campaignType = 'newsletter',
      targetAudience = 'all' // 'all', 'new', 'active', 'specific-zipcodes'
    } = JSON.parse(event.body);

    if (!subject || !htmlContent) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Subject and HTML content are required' })
      };
    }

    // Get subscribers from your database
    // This is where you'd query your actual database
    // For now, we'll use a mock list
    const subscribers = [
      // This would come from your database
      // { email: 'test@example.com', zipcode: '12345', status: 'active' }
    ];

    let targetSubscribers = subscribers;

    // Filter subscribers based on target audience
    if (targetAudience === 'new') {
      // Subscribers who joined in the last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      targetSubscribers = subscribers.filter(sub => 
        new Date(sub.subscribedAt) > thirtyDaysAgo
      );
    } else if (targetAudience === 'active') {
      // Subscribers who have engaged recently
      targetSubscribers = subscribers.filter(sub => sub.status === 'active');
    }

    // Send emails to all target subscribers
    const emailPromises = targetSubscribers.map(subscriber => {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: subscriber.email,
        subject: subject,
        html: htmlContent,
        text: textContent || htmlContent.replace(/<[^>]*>/g, ''),
        headers: {
          'List-Unsubscribe': `<mailto:${process.env.EMAIL_USER}?subject=unsubscribe>`,
          'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
        }
      };

      return transporter.sendMail(mailOptions);
    });

    const results = await Promise.allSettled(emailPromises);
    
    const successful = results.filter(result => result.status === 'fulfilled').length;
    const failed = results.filter(result => result.status === 'rejected').length;

    // Log campaign results
    console.log(`Campaign sent: ${successful} successful, ${failed} failed`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: `Campaign sent successfully!`,
        stats: {
          total: targetSubscribers.length,
          successful,
          failed
        }
      })
    };

  } catch (error) {
    console.error('Campaign error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to send campaign. Please try again.' 
      })
    };
  }
}; 