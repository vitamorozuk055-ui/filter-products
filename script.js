const products = [
  {
    id: 1,
    name: "iPhone 15 Pro 256GB",
    device: "iphone",
    model: "iPhone 15 Pro",
    memory: "256GB",
    condition: "new",
    price: 1200,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=512&fmt=p-jpg",
  },
  {
    id: 2,
    name: "iPhone 15 128GB",
    device: "iphone",
    model: "iPhone 15",
    memory: "128GB",
    condition: "new",
    price: 900,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=512&fmt=p-jpg",
  },
  {
    id: 3,
    name: "iPhone 14 128GB",
    device: "iphone",
    model: "iPhone 14",
    memory: "128GB",
    condition: "used",
    price: 650,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-midnight-select-202209?wid=470&fmt=p-jpg",
  },
  {
    id: 4,
    name: "iPhone 13 256GB",
    device: "iphone",
    model: "iPhone 13",
    memory: "256GB",
    condition: "used",
    price: 550,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=470&fmt=p-jpg",
  },
  {
    id: 5,
    name: "iPad Air 256GB",
    device: "ipad",
    model: "iPad Air",
    memory: "256GB",
    condition: "new",
    price: 850,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-blue-wifi?wid=512&fmt=p-jpg",
  },
  {
    id: 6,
    name: "iPad Pro 512GB",
    device: "ipad",
    model: "iPad Pro",
    memory: "512GB",
    condition: "new",
    price: 1400,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-select-202405-spaceblack-wifi?wid=512&fmt=p-jpg",
  },
  {
    id: 7,
    name: "iPad 10th Gen 128GB",
    device: "ipad",
    model: "iPad 10th Gen",
    memory: "128GB",
    condition: "used",
    price: 480,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-select-202212-blue-wifi?wid=512&fmt=p-jpg",
  },
];



const grid = document.getElementById("productGrid");
const findBtn = document.getElementById("findBtn");
const countLabel = document.getElementById("count");
const priceRange = document.getElementById("priceFilter");
const priceValueLabel = document.getElementById("priceValue");
const deviceFilter = document.getElementById("deviceFilter");
const modelFilter = document.getElementById("modelFilter");
const statusFilter = document.getElementById("statusFilter");

const formatDevice = (device) => 
    device === "iphone" ? "iPhone" : device === "ipad" ? "iPad" : device;

const formatCondition = (condition) => 
    condition === "new" ? "Новий" : condition === "used" ? "Б/У" : condition;

const populateModeOptions = () => {
    if (!modelFilter || !deviceFilter){
        return;
    }
  const selectedDevice = deviceFilter.value;

  const models = products
    .filter((p) => selectedDevice === "all" || p.device === selectedDevice)
    .map((p)=> p.model);

  const uniqueModels = [...new Set(models)].sort((a, b) => a.localeCompare(b));

  const previousValue = modelFilter.value;

  modelFilter.innerHTML = `<option value = "all">Всі моделі</option>`;
  
  uniqueModels.forEach((model) => {

    modelFilter.insertAdjacentHTML("beforeend", `<option value="${model}">${model}</option>`);

});

modelFilter.value = uniqueModels.includes(previousValue)
 ? previousValue
 : "all";
};


const updatePriceLabel = () => {
    if (!priceRange || !priceValueLabel){
        return
    }
    priceValueLabel.textContent = priceRange.value;

};

if (priceRange && priceValueLabel) {
    priceRange.addEventListener("input", updatePriceLabel);

    priceRange.addEventListener("change", updatePriceLabel);

    updatePriceLabel();
}


const render = (data) => {
  grid.innerHTML = "";

  countLabel.textContent = data.length;
  
  if (data.length === 0) {
    grid.innerHTML = 
    "<h2 style='width: 100%; text-align: center'>Нічого не знайдено </h2>";
    return;

  }
 
  data.forEach((p) => {

    const html = `
    <div class="product-card">
                <img src="${p.img}" alt="${p.name}">
          <div style="font-size: 12px; color: var(--accent)">${formatDevice(p.device)}</div>
                <h3>${p.name}</h3>
          <p style="color: var(--text-dim); font-size: 14px">Модель: ${p.model}</p>
          <p style="color: var(--text-dim); font-size: 14px">Пам'ять: ${p.memory}</p>
          <p style="color: var(--text-dim); font-size: 14px">Стан: ${formatCondition(p.condition)}</p>
                <p class="price">$${p.price}</p>
                <button class="search-btn" style="padding: 8px; font-size: 14px">У кошик</button>
            </div>
            `;
            
            grid.insertAdjacentHTML("beforeend", html);
  });
};


const applyFilters = () => {

  const deviceQuery = deviceFilter ? deviceFilter.value : "all";

  const modelQuery = modelFilter ? modelFilter.value : "all";

  const statusQuery = statusFilter ? statusFilter.value : "all";

  const maxPrice = Number(priceRange.value);




const selectedMemory = Array.from(document.querySelectorAll(".memory-filter:checked")
).map((cb) => cb.value);


let filtered = products.filter((p) => {
  const matchDevise = deviceQuery === "all" || p.device === deviceQuery;

  const matchModel = modelQuery === "all" || p.model === modelQuery;

  const matchMemory = selectedMemory.length === 0 || selectedMemory.includes(p.memory);

  const matchCondition = statusQuery === "all" || p.condition === statusQuery;

  const matchPrice = p.price <= maxPrice;
  
  return(
    matchDevise && matchModel && matchMemory && matchCondition && matchPrice  );

});

render(filtered);

};


findBtn.addEventListener("click", applyFilters);

deviceFilter.addEventListener("change", populateModeOptions);


populateModeOptions();

render(products);

