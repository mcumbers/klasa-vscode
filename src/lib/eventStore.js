class EventStore extends Array {

	addEvent(label, eventArguments, description) {
		this.push({ label, arguments: eventArguments, description });
		return this;
	}

	sort() {
		return super.sort((a, b) => {
			const nameA = a.label.toUpperCase();
			const nameB = b.label.toUpperCase();
			if (nameA < nameB) return -1;
			if (nameA > nameB) return 1;
			return 0;
		});
	}

}

module.exports = new EventStore()
	// Klasa Events
	.addEvent('commandError', 'message, command, params, error', 'Emitted when a command has errored.')
	.addEvent('commandInhibited', 'message, command, response', 'Emitted when a command has been inhibited.')
	.addEvent('commandRun', 'message, command, args', 'Emitted when a command is about to be run.')
	.addEvent('commandUnknown', 'message, command', 'Emitted when an unknown command is called.')
	.addEvent('commandSuccess', 'message, command, params, response', 'Emitted when a command has successfully run.')
	.addEvent('configCreateEntry', 'entry', 'Emitted when config entries are created.')
	.addEvent('configDeleteEntry', 'entry', 'Emitted when config entries are deleted.')
	.addEvent('configUpdateEntry', 'oldEntry, newEntry, path', 'Emitted when config entries are updated or reset.')
	.addEvent('eventError', 'event, args, error', 'Emitted when an event has errored.')
	.addEvent('finalizerError', 'message, response, timer, finalizer, error', 'Emitted when a finalizer has errored.')
	.addEvent('monitorError', 'message, monitor, error', 'Emitted when a monitor has errored.')
	.addEvent('taskError', 'scheduledTask, task, error', 'Emitted when a task has errored.')
	.addEvent('pieceLoaded', 'piece', 'Emitted when a piece is loaded.')
	.addEvent('pieceUnloaded', 'piece', 'Emitted when a piece is unloaded.')
	.addEvent('pieceReloaded', 'piece', 'Emitted when a piece is reloaded.')
	.addEvent('pieceEnabled', 'piece', 'Emitted when a piece is enabled.')
	.addEvent('pieceDisabled', 'piece', 'Emitted when a piece is disabled.')
	.addEvent('schemaKeyAdd', 'key', 'Emitted when a key has been added to the schema.')
	.addEvent('schemaKeyRemove', 'key', 'Emitted when a key has been removed from the schema.')
	.addEvent('schemaKeyUpdate', 'key', 'Emitted when a key has been updated in the schema.')
	.addEvent('klasaReady', null, 'Emitted when klasa is fully ready and initialized.')
	.addEvent('log', 'data, type', 'A central logging event for klasa.')
	.addEvent('verbose', 'data', 'An event for handling verbose logs')
	.addEvent('wtf', 'data', 'An event for handling wtf logs (what a terrible failure)')
	// D.JS Events
	.addEvent('channelCreate', 'channel', 'Emitted whenever a channel is created.')
	.addEvent('channelDelete', 'channel', 'Emitted whenever a channel is deleted.')
	.addEvent('channelPinsUpdate', 'channel, time', 'Emitted whenever the pins of a channel are updated.')
	.addEvent('channelUpdate', 'oldChannel, newChannel', 'Emitted whenever a channel is updated - e.g. name change, topic change.')
	.addEvent('clientUserGuildSettingsUpdate', 'clientUserGuildSettings', "Emitted whenever the client user's settings update.")
	.addEvent('clientUserSettingsUpdate', 'clientUserSettings', "Emitted whenever the client user's settings update.")
	.addEvent('debug', 'info', 'Emitted for general debugging information.')
	.addEvent('disconnect', 'event', "Emitted when the client's WebSocket disconnects and will no longer attempt to reconnect.")
	.addEvent('emojiCreate', 'emoji', 'Emitted whenever a custom emoji is created in a guild.')
	.addEvent('emojiDelete', 'emoji', 'Emitted whenever a custom guild emoji is deleted.')
	.addEvent('emojiUpdate', 'oldEmoji, newEmoji', 'Emitted whenever a custom guild emoji is updated.')
	.addEvent('error', 'error', "Emitted whenever the client's WebSocket encounters a connection error.")
	.addEvent('guildBanAdd', 'guild, user', 'Emitted whenever a member is banned from a guild.')
	.addEvent('guildBanRemove', 'guild, user', 'Emitted whenever a member is unbanned from a guild.')
	.addEvent('guildCreate', 'guild', 'Emitted whenever the client joins a guild.')
	.addEvent('guildDelete', 'guild', 'Emitted whenever a guild is deleted/left.')
	.addEvent('guildMemberAdd', 'member', 'Emitted whenever a user joins a guild.')
	.addEvent('guildMemberAvailable', 'member', 'Emitted whenever a member becomes available in a large guild.')
	.addEvent('guildMemberRemove', 'member', 'Emitted whenever a member leaves a guild, or is kicked.')
	.addEvent('guildMembersChunk', 'members, guild', 'Emitted whenever a chunk of guild members is received. All members come from the same guild.')
	.addEvent('guildMemberSpeaking', 'member, speaking', 'Emitted once a guild member starts/stops speaking.')
	.addEvent('guildMemberUpdate', 'oldMember, newMember', 'Emitted whenever a guild member changes - i.e. new role, removed role, nickname.')
	.addEvent('guildUnavailable', 'guild', 'Emitted whenever a guild becomes unavailable, likely due to a server outage.')
	.addEvent('guildUpdate', 'oldGuild, newGuild', 'Emitted whenever a guild is updated - e.g. name change.')
	.addEvent('message', 'message', 'Emitted whenever a message is created.')
	.addEvent('messageDelete', 'message', 'Emitted whenever a message is deleted.')
	.addEvent('messageDeleteBulk', 'messages', 'Emitted whenever messages are deleted in bulk.')
	.addEvent('messageReactionAdd', 'messageReaction, user', 'Emitted whenever a reaction is added to a message.')
	.addEvent('messageReactionRemove', 'messageReaction, user', 'Emitted whenever a reaction is removed from a message.')
	.addEvent('messageReactionRemoveAll', 'message', 'Emitted whenever all reactions are removed from a message.')
	.addEvent('messageUpdate', 'oldMessage, newMessage', 'Emitted whenever a message is updated - e.g. embed or content change.')
	.addEvent('presenceUpdate', 'oldMember, newMember', "Emitted whenever a guild member's presence changes, or they change one of their details.")
	.addEvent('ready', null, 'Emitted when the client becomes ready to start working.')
	.addEvent('reconnecting', null, 'Emitted whenever the client tries to reconnect to the WebSocket.')
	.addEvent('resume', 'replayed', 'Emitted whenever a WebSocket resumes.')
	.addEvent('roleCreate', 'role', 'Emitted whenever a role is created.')
	.addEvent('roleDelete', 'role', 'Emitted whenever a guild role is deleted.')
	.addEvent('roleUpdate', 'oldRole, newRole', 'Emitted whenever a guild role is updated.')
	.addEvent('typingStart', 'channel, user', 'Emitted whenever a user starts typing in a channel.')
	.addEvent('typingStop', 'channel, user', 'Emitted whenever a user stops typing in a channel.')
	.addEvent('userNoteUpdate', 'user, oldNote, newNote', 'Emitted whenever a note is updated.')
	.addEvent('userUpdate', 'oldUser, newUser', "Emitted whenever a user's details (e.g. username) are changed.")
	.addEvent('voiceStateUpdate', 'oldMember, newMember', 'Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.')
	.addEvent('warn', 'info', 'Emitted for general warnings.')
	.sort();
