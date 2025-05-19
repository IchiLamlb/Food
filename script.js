// script.js

const data = {
    "ga-ran-cay": {
        name: "Gà rán cay",
        image: "./image/ex3.jpg",
        price: "45.000đ",
        info: "Gà rán giòn, cay nồng, thích hợp cho bữa trưa nhanh.",
        rating: "4.7⭐",
        distance: "350m"
    },
    "pho-bo-tai": {
        name: "Phở bò tái",
        image: "./image/ex6.jpg",
        price: "40.000đ",
        info: "Phở truyền thống với nước dùng đậm đà và thịt bò tái mềm.",
        rating: "4.5⭐",
        distance: "450m"
    },
    "banh-cuon-thit-nuong": {
        name: "Bánh cuốn thịt nướng",
        image: "./image/ex5.jpg",
        price: "38.000đ",
        info: "Món ăn nhẹ nhàng, thanh đạm nhưng vẫn đậm vị.",
        rating: "4.6⭐",
        distance: "400m"
    }
};

// Hàm lấy ID từ URL
function getFoodIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function renderFoodDetail() {
    const id = getFoodIdFromURL();
    const food = data[id];

    if (!food) {
        document.body.innerHTML = "<p>Món ăn không tồn tại.</p>";
        return;
    }

    document.getElementById('food-name').textContent = food.name;
    document.getElementById('food-image').src = food.image;
    document.getElementById('food-price').textContent = food.price;
    document.getElementById('food-info').textContent = food.info;
    document.getElementById('food-rating').textContent = food.rating;
    document.getElementById('food-distance').textContent = food.distance;
}

// Chạy khi trang được load
if (window.location.pathname.includes("detail.html")) {
    renderFoodDetail();
}
