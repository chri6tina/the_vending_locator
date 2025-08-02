// Admin Dashboard JavaScript

// Initialize admin dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadLeads();
    updateStats();
});

// Load leads from localStorage
function loadLeads() {
    const leads = JSON.parse(localStorage.getItem('vendingLeads') || '[]');
    displayLeads(leads);
}

// Display leads in the table
function displayLeads(leads) {
    const tbody = document.getElementById('leadsTableBody');
    const noLeads = document.getElementById('noLeads');
    
    if (leads.length === 0) {
        tbody.innerHTML = '';
        noLeads.style.display = 'block';
        return;
    }
    
    noLeads.style.display = 'none';
    
    // Sort leads by date (newest first)
    leads.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    tbody.innerHTML = leads.map((lead, index) => `
        <tr>
            <td>${formatDate(lead.date)}</td>
            <td>${lead.email}</td>
            <td>${lead.zipcode}</td>
            <td>
                <span class="status-badge status-${lead.status || 'new'}">
                    ${lead.status === 'contacted' ? 'Contacted' : 'New'}
                </span>
            </td>
            <td>
                <button class="action-btn" onclick="toggleStatus(${index})" title="Toggle Status">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn" onclick="deleteLead(${index})" title="Delete Lead">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="action-btn" onclick="copyEmail('${lead.email}')" title="Copy Email">
                    <i class="fas fa-copy"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Toggle lead status
function toggleStatus(index) {
    const leads = JSON.parse(localStorage.getItem('vendingLeads') || '[]');
    leads[index].status = leads[index].status === 'contacted' ? 'new' : 'contacted';
    localStorage.setItem('vendingLeads', JSON.stringify(leads));
    displayLeads(leads);
    updateStats();
}

// Delete lead
function deleteLead(index) {
    if (confirm('Are you sure you want to delete this lead?')) {
        const leads = JSON.parse(localStorage.getItem('vendingLeads') || '[]');
        leads.splice(index, 1);
        localStorage.setItem('vendingLeads', JSON.stringify(leads));
        displayLeads(leads);
        updateStats();
    }
}

// Copy email to clipboard
function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        showNotification('Email copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy email', 'error');
    });
}

// Filter leads
function filterLeads(searchTerm) {
    const leads = JSON.parse(localStorage.getItem('vendingLeads') || '[]');
    const filtered = leads.filter(lead => 
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.zipcode.includes(searchTerm) ||
        lead.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayLeads(filtered);
}

// Export leads to CSV
function exportLeads() {
    const leads = JSON.parse(localStorage.getItem('vendingLeads') || '[]');
    
    if (leads.length === 0) {
        showNotification('No leads to export', 'error');
        return;
    }
    
    const csvContent = [
        ['Date', 'Email', 'Zip Code', 'Status'],
        ...leads.map(lead => [
            formatDate(lead.date),
            lead.email,
            lead.zipcode,
            lead.status || 'new'
        ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vending-leads-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Leads exported successfully!', 'success');
}

// Update dashboard stats
function updateStats() {
    const leads = JSON.parse(localStorage.getItem('vendingLeads') || '[]');
    
    // Total leads
    document.getElementById('totalLeads').textContent = leads.length;
    
    // New leads this week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const newLeads = leads.filter(lead => new Date(lead.date) > oneWeekAgo).length;
    document.getElementById('newLeads').textContent = newLeads;
    
    // Conversion rate (placeholder - you can customize this)
    const contactedLeads = leads.filter(lead => lead.status === 'contacted').length;
    const conversionRate = leads.length > 0 ? Math.round((contactedLeads / leads.length) * 100) : 0;
    document.getElementById('conversionRate').textContent = conversionRate + '%';
    
    // Average response time (placeholder)
    document.getElementById('avgResponse').textContent = '2h';
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add sample data for testing (remove this in production)
function addSampleData() {
    const sampleLeads = [
        {
            date: new Date().toISOString(),
            email: 'john@vendingcompany.com',
            zipcode: '90210',
            status: 'new'
        },
        {
            date: new Date(Date.now() - 86400000).toISOString(),
            email: 'sarah@snackvending.com',
            zipcode: '10001',
            status: 'contacted'
        },
        {
            date: new Date(Date.now() - 172800000).toISOString(),
            email: 'mike@drinkvending.net',
            zipcode: '33101',
            status: 'new'
        }
    ];
    
    localStorage.setItem('vendingLeads', JSON.stringify(sampleLeads));
    loadLeads();
    updateStats();
}

// Uncomment the line below to add sample data for testing
// addSampleData(); 