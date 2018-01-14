const Discord = require('discord.js');
const bot = new Discord.Client();

// Connexion to Discord API
bot.login('NDAyMDUyODExOTc1NTU3MTIx.DTzT1w.rF7BTPE5lCS15tXOisC82wFp0Ko');
    
// Removes every game roles when the bot logs in
    bot.guilds.forEach(function(guild) { // For each guild
        guild.members.forEach(function(member) { // For each membre
            member.roles.forEach(function(role) { // For each role
                if(role.name.startsWith("ðŸŽ® ")) {member.removeRole(role)} // If the role name starts with a controller, removes it
            });
        });
    });

});

// Feature : The bot gives members a role depending the game they are currently playing
bot.on("presenceUpdate", (oldMember, newMember) => {

    var guild = newMember.guild;

    if (newMember.user.presence.game) {

        // Removes every previous game roles
        newMember.roles.forEach(function(role) {
            if(role.name.startsWith("ðŸŽ® ")) {newMember.removeRole(role)}
        });

        var gamename = newMember.user.presence.game.name;
		//CSGO

        if (gamename.startsWith("Counter-Strike")) { // EX : Specific to Counter-Strike : Global Offensive, because it's too long to create a role with this name
            newMember.addRole(guild.roles.find("name","ðŸŽ® Counter-Strike"))
                .then(function() {
                   
                },function(e) {
                    
                });
        }
        else { // If a role "ðŸŽ® [name]" exists, gives it
            var newrole = guild.roles.find("name",`ðŸŽ® ${gamename}`);
            if (newrole) {
                newMember.addRole(guild.roles.find("name",`ðŸŽ® ${gamename}`))
                    .then(function() {
                        
                    },function(e) {
                        
                    });
            }
        }
		
		/////////////////////////////////Dota
		
		if (gamename.startsWith("DOTA")) { // EX : Specific to Counter-Strike : Global Offensive, because it's too long to create a role with this name
            newMember.addRole(guild.roles.find("name","ðŸŽ® Dota2"))
                .then(function() {
                    
                },function(e) {
                    
                });
        }
		////////////////////////////////  GTA
		if (gamename.startsWith("Grand")) { // EX : Specific to Counter-Strike : Global Offensive, because it's too long to create a role with this name
            newMember.addRole(guild.roles.find("name","ðŸŽ® GTA"))
                .then(function() {
                    
                },function(e) {
                    
                });
        }
		
		//////////////////////////// Metin
		if (gamename.startsWith("Metin" || "METIN")) { // EX : Specific to Counter-Strike : Global Offensive, because it's too long to create a role with this name
            newMember.addRole(guild.roles.find("name","ðŸŽ® Metin2"))
                .then(function() {
                  
                },function(e) {
                    
                });
        }
		
    }
    else if (!newMember.user.presence.game) {
        newMember.roles.forEach(function(role) {
            if(role.name.startsWith("ðŸŽ® ")) {newMember.removeRole(role)}
        });
    }

});
