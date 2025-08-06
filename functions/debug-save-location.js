exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    try {
        console.log('Event body:', event.body);
        console.log('Event body type:', typeof event.body);
        
        let parsedBody;
        try {
            parsedBody = JSON.parse(event.body);
            console.log('Parsed body:', parsedBody);
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    error: 'Invalid JSON',
                    details: parseError.message 
                })
            };
        }

        const { locationData } = parsedBody;
        console.log('Location data:', locationData);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Debug successful',
                receivedData: locationData
            })
        };

    } catch (error) {
        console.error('Debug function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Debug function failed',
                details: error.message 
            })
        };
    }
}; 