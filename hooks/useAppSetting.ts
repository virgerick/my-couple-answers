interface AppSetting {
  name?: string;
  descripcion?: string;
}
const useAppSetting = () => {
  const appSetting: AppSetting = process.env.appSetting as AppSetting;
  

  return appSetting;
};

export default useAppSetting;
