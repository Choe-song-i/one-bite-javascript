export default function CityDetail() {
  this.$target = document.createElement("div");
  this.$target.className = "citydetail";

  this.template = () => {};
  this.render = () => {};

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
