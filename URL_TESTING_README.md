# 🔍 URL Testing Tools for Vending Locator

This directory contains comprehensive tools to test and validate all your vending-leads URLs, ensuring they're working correctly and identifying any broken links.

## 🚀 Available Tools

### 1. **Local URL Testing** (`test_local_urls.js`)
**Use this first** to test your development environment.

**What it does:**
- Tests all 183 vending-leads URLs against `http://localhost:3000`
- Fast testing (5-second timeouts)
- Identifies local routing issues
- Generates detailed local test reports

**When to use:**
- Before deploying to production
- When troubleshooting local development issues
- To verify your Next.js routing is working correctly

**Prerequisites:**
- Development server running (`npm run dev`)
- Server accessible at `http://localhost:3000`

### 2. **Production URL Testing** (`test_all_urls.js`)
**Use this to test your live website.**

**What it does:**
- Tests all URLs against `https://thevendinglocator.com`
- Comprehensive testing with 10-second timeouts
- Generates detailed production reports
- Creates CSV exports for analysis

**When to use:**
- After deploying to production
- Regular health checks
- SEO audits
- Identifying live site issues

## 📋 How to Use

### Step 1: Test Locally First
```bash
# Make sure your dev server is running
npm run dev

# In a new terminal, run the local test
node test_local_urls.js
```

### Step 2: Test Production (if local test passes)
```bash
# Test against your live website
node test_all_urls.js
```

## 📊 What You'll Get

### **Real-time Console Output:**
- Progress tracking
- Immediate status updates
- Error details for broken URLs

### **Generated Reports:**
- **Markdown Reports**: Detailed analysis with recommendations
- **CSV Exports**: Data for spreadsheet analysis
- **Status Code Breakdown**: Complete HTTP response analysis

### **Key Metrics:**
- Total URLs tested
- Working vs. broken URLs
- Success rate percentage
- Specific error details for broken URLs

## 🎯 Expected Results

### **Healthy Website:**
- ✅ **183 working URLs** (100% success rate)
- ✅ **Status 200** for all pages
- ✅ **No 404 errors**
- ✅ **Fast response times**

### **Issues to Watch For:**
- ❌ **404 errors** (page not found)
- ❌ **500 errors** (server errors)
- ❌ **Timeouts** (slow responses)
- ❌ **Connection errors** (server down)

## 🚨 Common Issues & Solutions

### **Local Testing Issues:**
1. **"Connection refused"**
   - Make sure `npm run dev` is running
   - Check if port 3000 is available

2. **"Page not found"**
   - Verify Next.js routing configuration
   - Check for build errors
   - Restart development server

### **Production Testing Issues:**
1. **"Connection timeout"**
   - Check server status
   - Verify domain configuration
   - Check firewall settings

2. **"404 errors"**
   - Verify deployment was successful
   - Check server routing
   - Verify file structure

## 📈 Monitoring & Maintenance

### **Regular Testing Schedule:**
- **Weekly**: Run local tests
- **Monthly**: Run production tests
- **After deployments**: Always test both environments

### **Tools to Use Alongside:**
- **Google Search Console**: Monitor 404 errors
- **Screaming Frog**: Bulk URL testing
- **Ahrefs/SEMrush**: Backlink monitoring
- **Custom health checks**: Automated monitoring

## 💡 Best Practices

1. **Test locally first** before deploying
2. **Fix issues immediately** when found
3. **Monitor regularly** to catch problems early
4. **Keep reports** for trend analysis
5. **Set up alerts** for critical failures

## 🔧 Customization

### **Modify Test Parameters:**
- **Timeout values**: Adjust in the scripts
- **Batch sizes**: Change for different server capacities
- **Base URLs**: Update for different environments
- **Report formats**: Customize output as needed

### **Add Custom Tests:**
- **Content validation**: Check for specific text
- **Performance testing**: Measure response times
- **SEO checks**: Validate meta tags
- **Accessibility**: Test with screen readers

## 📞 Support

If you encounter issues:
1. Check the console output for error details
2. Verify your server is running correctly
3. Review the generated reports for specific issues
4. Check your Next.js configuration and routing

---

**🎯 Goal**: Maintain 100% URL health for optimal SEO and user experience!

**💡 Remember**: Regular testing prevents problems and keeps your website performing at its best.
