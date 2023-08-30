class SecretHolder {
    constructor() {
        this.hasSecret = false;
        [this.getSecret, this.setSecret, this.forgetSecret] = this.buildSecretManager();
    }

    buildSecretManager() {
        let secret = "";

        function revealSecret() {
            if (!this.hasSecret) return "[no secret here yet]";
            return secret;
        }

        function hideSecret(value) {
            if (!this.hasSecret) this.hasSecret = true;
            secret = value;
        }

        function destroySecret(newSecret) {
            if (this.hasSecret) this.hasSecret = false;
            secret = "";
        }

        return [revealSecret, hideSecret, destroySecret];
    }
}

const safeSecret = new SecretHolder();

console.log("- Do u have a secret?\n" + safeSecret.hasSecret);
console.log("- Tell me the secret!\n" + safeSecret.getSecret());

safeSecret.setSecret("este é meu segredo");
console.log("- Do u have a secret?\n" + safeSecret.hasSecret);
console.log("- Tell me the secret!\n" + safeSecret.getSecret());

safeSecret.forgetSecret();
console.log("- Do u have a secret?\n" + safeSecret.hasSecret);
console.log("- Tell me the secret!\n" + safeSecret.getSecret());
