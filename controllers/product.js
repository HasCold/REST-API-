const getAllProducts = async (req, res) => {
    res.status(200).json({
        msg : "I am getAllProducts"
    });
};

const getAllProducts_Testing = async (req, res) => {
    res.status(200).json({
        msg : "I am getAllProducts Testing"
    });
};

module.exports = {getAllProducts, getAllProducts_Testing};