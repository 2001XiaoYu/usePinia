    import { defineStore } from 'pinia'

    const useUser = defineStore("user", {
        state: () => ({
            name: "why",
            age: 18,
            level: 88
        })
    })

    export default useUser