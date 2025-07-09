export default function Pokemons({ $app, initialState, handleLoadMore }) {
  this.state = initialState;
  this.handleLoadMore = handleLoadMore;
  this.$target = document.createElement("div");
  this.$target.className = "pokemon-list";

  $app.appendChild(this.$target);

  this.template = () => {
    let temp = `<div class="pokemon-items-container">`;
    if (this.state) {
      this.state.forEach((elm) => {
        temp += `<div class="pokemon-item" id=${elm.id}>
                        <img src="${elm.img}"/>
                        <div>No${elm.id}</div>
                        <div class="pokemon-item-info">${elm.name}</div>
                        <div class="pokemon-item-score"> ${elm.type}</div>
                    </div> `;
      });
      temp += `</div>`;
    }
    return temp;
  };
  this.render = () => {
    this.$target.innerHTML = this.template();
    if (!this.state.isEnd) {
      const $loadMoreButton = document.createElement("button");
      $loadMoreButton.className = "add-items-btn";
      $loadMoreButton.textContent = "+ 더보기";
      this.$target.appendChild($loadMoreButton);
      $loadMoreButton.addEventListener("click", () => {
        this.handleLoadMore();
      });
    }
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
