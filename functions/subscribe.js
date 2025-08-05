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
    const { email, zipcode, source = 'website' } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    // Store in database (you can use Airtable, Supabase, or any database)
    // For now, we'll store in a simple JSON file or use a service like Airtable
    
    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to The Vending Locator! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Welcome to The Vending Locator!</h2>
          <p>Thank you for subscribing to our newsletter! You're now part of our community of successful vending operators.</p>
          
          <h3>What you'll receive:</h3>
          <ul>
            <li>Weekly hot leads and location opportunities</li>
            <li>Vending industry tips and insights</li>
            <li>Exclusive content to grow your business</li>
            <li>Special offers and promotions</li>
          </ul>
          
          <p>We're excited to help you find profitable vending locations!</p>
          
          <p style="margin-top: 30px; font-size: 12px; color: #666;">
            You can unsubscribe at any time by clicking the link at the bottom of our emails.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    // Store subscriber data (you can implement your preferred database)
    const subscriberData = {
      email,
      zipcode,
      source,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    // Here you would save to your database
    // For now, we'll just return success
    console.log('New subscriber:', subscriberData);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!' 
      })
    };

  } catch (error) {
    console.error('Subscription error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to subscribe. Please try again.' 
      })
    };
  }
}; 