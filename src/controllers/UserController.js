const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const email = await User.findOne({ email: req.body.email });

    if (email) {
      return res.status(400).json({ error: "E-mail já está cadastrado." });
    }

    const user = await User.create(req.body);

    return res.json(user);
  },
  async list(req, res) {
    const user = await User.find({});
    return res.json(user);
  },
  async index(req, res) {
    const user = await User.findOne({ _id: req.params.id });
    if (user != null) {
      return res.json(user);
    } else {
      return res.status(400).json({ error: "Nenhum dado foi encontrado!" });
    }
  },
  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(user);
  },
  async destroy(req, res) {
    await User.deleteOne({ _id: req.params.id });
    return res.json({ message: "Exclusão realizada com sucesso!" });
  }
};
