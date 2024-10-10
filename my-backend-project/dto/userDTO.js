class UserDTO {
    constructor(user) {
        this.id = user._id;
        this.firsName = user.firsName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.role = user.role;
    }
}

module.exports = UserDTO;