function public_path(url){
  return process.env.PUBLIC_URL + url;
}
function rupiah(val){
  return new Intl.NumberFormat("id-ID").format(val);
}


export {
  public_path,
  rupiah
}