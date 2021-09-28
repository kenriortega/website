export const useFeed = () => {
    let isLoading = false
    const polls = [
        {
            "_id": "e07ed972-45cf-40bc-b480-27bbd558ea7d",
            "username": "MAdmin",
            "role": "ADMIN",
            "fullName": "admin de dios",
            "avatar": "https://source.boringavatars.com/beam/120/admin de dios?colors=264653,2a9d8f,e9c46a,f4a261,e76f51",
            "created_at": "2021-06-19T14:10:31.169Z"
        }
    ]

    return {
        isLoading,
        polls
    }
}