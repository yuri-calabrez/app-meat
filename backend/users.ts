export class User {
	constructor(public email: string, public name: string, private password: string){}

	matches(another: User): boolean{
		return another !== undefined && 
		another.email === this.email && 
		another.password === this.password;
	}
}

export const users: {[key:string] : User} = {
	"luiza@user.com": new User("luiza@user.com", "Luiza", "luiza"),
	"amanda@user.com": new User("amanda@user.com", "Amanda", "amanda"),
}
