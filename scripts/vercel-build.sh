#!/bin/bash
set -e

# Build the bundle
yarn build

# Create Build Output API v3 structure
OUT_DIR=".vercel/output/functions/index.func"
mkdir -p "$OUT_DIR"

# Copy bundle
cp server.js "$OUT_DIR/index.js"

# Function config
cat > "$OUT_DIR/.vc-config.json" << 'EOF'
{
  "runtime": "nodejs22.x",
  "handler": "index.js",
  "launcherType": "Nodejs",
  "shouldAddHelpers": true,
  "maxDuration": 30
}
EOF

# Output config
mkdir -p ".vercel/output"
cat > ".vercel/output/config.json" << 'EOF'
{
  "version": 3,
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}
EOF
