import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "4c5d97bc-b542-4d67-810c-5702369b9956"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
                response => response.data
            )
        )
    },

    followUsers(userId, type) {
        return (
            instance[type](`follow/${userId}`).then(
                response => response.data
            )
        )
    },
}

export const profileAPI = {
    getProfileData(userId) {
        return (
            instance.get(`profile/${userId}`).then(response => response.data)
        )
    },

    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`).then(response => response.data)
        )
    },

    updateStatus(status) {
        return (
            instance.put('profile/status', {status: status}).then(response => response.data)
        )
    },

    updatePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData).then(response => response.data)
    },

    updateProfile(profile) {
        return instance.put(`profile`, profile ).then(response => response.data)
    }
}


export const authAPI = {
    getAuthUserData() {
        return (
            instance.get(`auth/me`).then(response => response.data)
        )
    },

    login(email, password, rememberMe = false, captcha = null) {
        return (
            instance.post('auth/login', {email, password, rememberMe, captcha}).then(response => response.data)
        )
    },

    logout() {
        return (
            instance.delete('auth/login').then(response => response.data)
        )
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`).then(response => response.data)
    }
}

