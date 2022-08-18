const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Operation {
  async newRegister(data) {
    const { concepto, monto, tipo, categoria, idUser } = data;
    const operation = await prisma.operaciones.create({
      data: {
        concepto: concepto,
        monto: monto,
        fecha: new Date(),
        tipo: tipo,
        categoria: categoria,
        user: {
          connect: {
            id: idUser,
          },
        },
      },
    });
    return operation;
  }
  async operations() {
    const operation = await prisma.operaciones.findMany({
      include: { user: { select: { name: true } } },
    });

    return operation;
  }
  async update(data, id) {
    const operation = await prisma.operaciones.update({
      where: { id: parseInt(id) },
      data,
    });
    return operation;
  }
  async delete(id) {
    const operation = await prisma.operaciones.delete({
      where: { id: parseInt(id) },
    });
    return operation;
  }
}

module.exports = Operation;
