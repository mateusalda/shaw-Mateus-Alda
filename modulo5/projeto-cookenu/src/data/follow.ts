import { UserDatabase } from "./UserDatabase"

export const follow = async (userId: string, followId: string) => {
    let errorCode = 400
    try {

        const userToFollowDB = new UserDatabase()
        const userToFollow = await userToFollowDB.getById(followId)

        const userDB = new UserDatabase()
        const user = await userDB.getById(userId)

        if (!userToFollow) {
            errorCode = 404
            throw new Error("User with this ID not found.")
        }
        if (user.following.includes(followId)) {
            throw new Error("User with this ID already being followed.")
        }

        user.following.push(followId)
        await userDB.setFollowing(user.id, JSON.stringify(user.following))

        userToFollow.followers.push(user.id)
        await userToFollowDB.setFollowers(followId, JSON.stringify(userToFollow.followers))

        return { success: "Followed successfully." }

    } catch (error: any) {
        return { error: error.message, errorCode }
    }
}