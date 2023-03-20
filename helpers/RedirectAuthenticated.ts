export default (callback?: string) => {
  const { status } = useSession();

  if (status.value === "authenticated") {
    if (callback) {
      navigateTo(callback, { external: true });
    } else {
      navigateTo("/", { external: false });
    }
  }
};
