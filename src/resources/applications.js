class Application {
    constructor(client) {
        this.client = client;
    }

    async list () {
        const response = await fetch(
            `${this.client.url}/v1/applications`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.client.authToken}`
                },
            }
        )

        return await response.json();
    }

    async create (data) {
        const response = await fetch(
            `${this.client.url}/v1/applications`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.client.authToken}`
                },
                body: JSON.stringify(data),
            }
        )

        return await response.json();
    }

    async retrieve (id) {
        const response = await fetch(
            `${this.client.url}/v1/applications/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.client.authToken}`
                },
            }
        )

        return await response.json();
    }

    async update (id, data) {
        const response = await fetch(
            `${this.client.url}/v1/applications/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.client.authToken}`
                },
                body: JSON.stringify(data),
            }
        )

        return await response.json();
    }
}

module.exports = Application;