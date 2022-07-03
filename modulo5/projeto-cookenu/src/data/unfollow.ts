import { UserDatabase } from "./UserDatabase"

export const unfollow = async (userId: string, unfollowId: string) => {
    let errorCode = 400
    try {
        const userToUnfollowDB = new UserDatabase()
        const userToUnfollow = await userToUnfollowDB.getById(unfollowId)

        const userDB = new UserDatabase()
        const user = await userDB.getById(userId)

        if (!userToUnfollow) {
            errorCode = 404
            throw new Error("User with this ID not found.")
        }
        if (!user.following.includes(unfollowId)) {
            throw new Error("User with this ID not being followed.")
        }

        const index = user.following.indexOf(unfollowId)
        user.following.splice(index, 1)
        await userDB.setFollowing(user.id, JSON.stringify(user.following))
        
        const indexToUnfollow = userToUnfollow.followers.indexOf(user.id)
        userToUnfollow.followers.splice(indexToUnfollow, 1)
        await userToUnfollowDB.setFollowers(unfollowId, JSON.stringify(userToUnfollow.followers))

        return { success: "Unfollowed successfully." }

    } catch (error: any) {
        return { error: error.message, errorCode }
    }
}