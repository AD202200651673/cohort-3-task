import mongoose from 'mongoose';
import dns from 'node:dns';
import config from '../config/config.js';

const connectDB = async () => {
    try {
        if (config.MONGODB_DNS_SERVERS) {
            const servers = config.MONGODB_DNS_SERVERS
                .split(',')
                .map(server => server.trim())
                .filter(Boolean);

            if (servers.length === 0) {
                throw new Error('MONGODB_DNS_SERVERS must contain at least one DNS server');
            }

            dns.setServers(servers);
        }

        await mongoose.connect(config.MONGODB_URI);
        console.log("Server connected to DB!!");
    } catch (error) {
        console.log("mongoDB connection failed:", error.message);
        throw error;
    }
}

export default connectDB;