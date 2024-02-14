import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const input = {
    lenChars: 60000,
    topic:
      "Experiência Arquitetônica: Uma definição Experiência do Usuário na Arquitetura",
    keywords: [
      "experiência do usuário",
      "experiência arquitetônica",
      "ux design",
      "atmosferas",
      "atmospherics",
    ],
  };

  const settings = {
    abstract: {
      pt: input.lenChars * 0.05,
      en: input.lenChars * 0.05,
    },
    introduction: input.lenChars * 0.1,
    method: input.lenChars * 0.2,
    results: input.lenChars * 0.45,
    conclusion: input.lenChars * 0.1,
  };

  try {
    return res.status(200).json({ settings: settings });
  } catch (e: any) {
    return res.status(500).json({ message: "Server Error" });
  }
}
