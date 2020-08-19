import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args, { request }) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      if (user.loginSecret === secret) {
        // JWT
        return generateToken(user.id);
      } else {
        throw Error("이메일/비밀값의 조합이 잘못되었습니다.");
      }
    },
  },
};
