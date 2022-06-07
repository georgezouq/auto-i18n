export const MENUS = () => [
    {
        name: '标题1',
        desc: '这是另一段',
    },
    {
        name: '标题2',
        desc: '这是另一段',
    },
]

export const getUserName = (user) => {
    if (user.indexOf('姓名') !== -1) {
        return user.replace('姓名:', '')
    }

    return '姓名:' + user
}