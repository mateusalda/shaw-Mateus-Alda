import UserAccount from "./UserAccount";

export default class Bank {
    private accounts: UserAccount[] = []

    getAccounts = () => {
        return this.accounts
    }

    setAccounts = (accounts: UserAccount[]) => {
        this.accounts = accounts
    }
}