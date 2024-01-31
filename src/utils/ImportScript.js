const importScript = (src) => {
  const script = document.createElement('script');
  script.src = '../../public/static/js/' + src;
  script.async = true;
  document.body.appendChild(script)
}

export default importScript