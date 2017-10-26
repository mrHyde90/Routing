//este codigo sirve para simular un servidor y su tiempo de espera
export class AuthService {
	loggedIn = false;
	//asyncronos es cuando la funcion toma algp de tiempo para terminar
	//es por eso que necesitas una pronmise, 
	//cuando esta funcion termine quiero que se ejecute esta promesa
	//alo mejor toma tiempo porque todabia tiene que alcanzar al server
	isAuthenticated(){
		const promise = new Promise(
			(resolve, reject) => {
				setTimeout(() => {
					resolve(this.loggedIn);
				}, 800);
			}
		);
		return promise;
	}

	login(){
		this.loggedIn = true;
	}

	logout(){
		this.loggedIn = false;
	}
}