/* eslint-disable */
const stMixin = {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUers() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          this.users = data;
          console.log("create");
        });
    },
  },
  async mounted() {
    await this.getUers();
  },
};

export default stMixin;