type Account = {
    name: string,
    email: string,
    role: string
}

const accounts: Account[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function emailAdmin(accounts: Account[]): string[] {
    return accounts.filter(acc => acc.role === 'admin').map(acc => acc.email)
}

console.log(emailAdmin(accounts));
