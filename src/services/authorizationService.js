import {UserService} from "./userService.js"

const AuthorizationService = {
    canUserEditGuild: async (currentUser, guildId) => {
        return AuthorizationService.isUserValid(currentUser)
            && UserService.userAdminsGuild(currentUser._id, guildId)
    },

    isUserValid: (currentUser) => {
        return !!currentUser
    }
}

export {AuthorizationService}