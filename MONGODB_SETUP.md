# MongoDB Installation Guide for Windows

## Quick Install (Recommended)

### Option 1: MongoDB Community Edition (Local Installation)

1. **Download MongoDB**
   - Go to: https://www.mongodb.com/try/download/community
   - Select:
     - Version: Latest (7.0 or higher)
     - Platform: Windows
     - Package: MSI
   - Click **Download**

2. **Install MongoDB**
   - Run the downloaded `.msi` file
   - Choose **Complete** installation
   - **Important**: Check "Install MongoDB as a Service"
   - **Important**: Check "Install MongoDB Compass" (GUI tool)
   - Click **Install**

3. **Verify Installation**
   ```powershell
   mongod --version
   ```

4. **Start MongoDB Service**
   ```powershell
   net start MongoDB
   ```

### Option 2: MongoDB Atlas (Cloud - Free Tier)

If you prefer not to install MongoDB locally, use MongoDB Atlas (cloud database):

1. **Create Account**
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Sign up for free

2. **Create Cluster**
   - Click "Build a Database"
   - Choose **FREE** tier (M0)
   - Select region closest to you
   - Click "Create Cluster"

3. **Setup Database Access**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Username: `portfolio_user`
   - Password: Generate or create one (save it!)
   - Database User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Setup Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://portfolio_user:<password>@cluster0.xxxxx.mongodb.net/`

6. **Update .env File**
   ```env
   MONGO_URI=mongodb+srv://portfolio_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
   Replace:
   - `YOUR_PASSWORD` with your database user password
   - `cluster0.xxxxx` with your actual cluster URL

## After Installation

### For Local MongoDB:

1. **Start MongoDB Service** (if not auto-started)
   ```powershell
   net start MongoDB
   ```

2. **Verify Connection**
   ```powershell
   mongosh
   ```
   You should see MongoDB shell prompt.

3. **Your .env should have:**
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/portfolio
   ```

### For MongoDB Atlas:

1. **Your .env should have:**
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

## Start Your Server

After MongoDB is set up:

```bash
npm run server
```

You should see:
```
✅ MongoDB Connected
🚀 Server is running on http://localhost:5001
```

## Verify Database is Working

1. **Submit a test contact form**
2. **Check MongoDB Compass** (local) or **Atlas Dashboard** (cloud)
3. **Look for:**
   - Database: `portfolio`
   - Collection: `contacts`
   - Your test message should be there!

## Troubleshooting

### "MongoDB service not found"
- Reinstall MongoDB and ensure "Install as Service" is checked
- Or start manually: `mongod --dbpath C:\data\db`

### "Connection refused"
- Check if MongoDB service is running: `Get-Service MongoDB`
- Start it: `net start MongoDB`

### "Authentication failed" (Atlas)
- Verify username and password in connection string
- Check Database Access settings in Atlas
- Ensure IP is whitelisted in Network Access

### "Cannot connect to Atlas"
- Check internet connection
- Verify connection string is correct
- Ensure Network Access allows your IP

## Which Option Should You Choose?

### Local MongoDB (Option 1)
✅ **Pros:**
- Faster (no internet latency)
- Free forever
- Full control
- Works offline

❌ **Cons:**
- Takes up disk space (~500MB)
- Need to manage service
- Only accessible from your computer

### MongoDB Atlas (Option 2)
✅ **Pros:**
- No installation needed
- Accessible from anywhere
- Automatic backups
- Free tier (512MB storage)
- Easy to scale

❌ **Cons:**
- Requires internet
- Limited free tier storage
- Slightly slower (network latency)

## Recommendation

- **For Development**: Use **Local MongoDB** (faster, easier)
- **For Production/Deployment**: Use **MongoDB Atlas** (accessible from deployed app)

## Next Steps

1. Choose and install MongoDB (local or Atlas)
2. Update `.env` with correct `MONGO_URI`
3. Restart server: `npm run server`
4. Test contact form
5. Verify messages are saved in database!
