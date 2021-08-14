import {UserService} from "./userService.js";

const AuthorizationService = {
    canUserEditGuild: async (currentUser, guildId) => {
        return AuthorizationService.isUserValid(currentUser)
            && await UserService.userAdminsGuild(currentUser._id, guildId)
    },

    isUserValid: (currentUser) => {
        return !!currentUser;
    }
}

export {AuthorizationService}