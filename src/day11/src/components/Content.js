export default function Content({ $app, initialState }) {
  this.state = initialState;
  this.$tagret = document.createElement("div");
  this.$tagret.className = "content";
  $app.appendChild(this.$tagret);
  this.template = () => {
    let temp = "";
    if (this.state) {
      this.state.forEach((elm) => {
        temp += `<img src=${elm.url}/>`;
      });
    }
    return temp;
  };
  this.render = () => {
    this.$tagret.innerHTML = this.template();
  };
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
