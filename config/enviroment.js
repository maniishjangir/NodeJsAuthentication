const devlopment={
    name: "devlopment",
    
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
             user: 'mrunknown.0086@gmail.com',
            pass: 'isnytfcymvjabomg'
        }
    },

    google_client_id: "410617945301-6ccfqlki6b4e371prm61ihiebdincbg4.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:7005/users/auth/google/callback"
        
    
}

const production = {
    name: "production"
}



module.exports = devlopment
