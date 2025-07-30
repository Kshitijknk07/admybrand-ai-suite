#!/bin/bash

# ADmyBRAND AI Suite - Netlify Deployment Script
# This script ensures a clean build before deployment

echo "🚀 Starting ADmyBRAND AI Suite deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Error: bun is not installed. Please install bun first."
    echo "Install with: curl -fsSL https://bun.sh/install | bash"
    exit 1
fi

echo "📦 Installing dependencies..."
bun install

echo "🔍 Running quality checks..."
bun run check-all

if [ $? -ne 0 ]; then
    echo "❌ Quality checks failed. Please fix the issues before deploying."
    exit 1
fi

echo "🏗️ Building for production..."
bun run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the build errors."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build output is in the 'dist' directory"
echo "🌐 Ready for Netlify deployment!"

# Check build output
if [ -d "dist" ]; then
    echo "📊 Build statistics:"
    echo "   - Total files: $(find dist -type f | wc -l)"
    echo "   - Total size: $(du -sh dist | cut -f1)"
    echo "   - HTML files: $(find dist -name "*.html" | wc -l)"
    echo "   - CSS files: $(find dist -name "*.css" | wc -l)"
    echo "   - JS files: $(find dist -name "*.js" | wc -l)"
else
    echo "❌ Error: dist directory not found after build."
    exit 1
fi

echo ""
echo "🎉 Deployment preparation complete!"
echo "📋 Next steps:"
echo "   1. Push your changes to the main branch"
echo "   2. Netlify will automatically deploy from the main branch"
echo "   3. Your site will be available at: https://admybrand-ai-suite.netlify.app"
echo ""
echo "🔗 Netlify Dashboard: https://app.netlify.com" 