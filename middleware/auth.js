export default ({ store, redirect }) => {
  if (store.state.isLogin) {
    return redirect("/signin");
  }
};
