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
        function hideSecret(newSecret) {
            if (!this.hasSecret) this.hasSecret = true;
            secret = newSecret;
        }
        function destroySecret(newSecret) {
            if (this.hasSecret) this.hasSecret = false;
            secret = "";
        }

        return [revealSecret, hideSecret, destroySecret];
    }
}

const safe = new SecretHolder()

console.log("- Do u have a secret?\n" + safe.hasSecret)
console.log("- Tell me the secret!\n" + safe.getSecret())
safe.setSecret("este é meu segredo")
console.log("- Do u have a secret?\n" + safe.hasSecret)
console.log("- Tell me the secret!\n" + safe.getSecret())
safe.forgetSecret()
console.log("- Do u have a secret?\n" + safe.hasSecret)
console.log("- Tell me the secret!\n" + safe.getSecret())
