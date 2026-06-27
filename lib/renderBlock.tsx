import {
  type PortableTextComponents,
} from "@portabletext/react";

export const RenderComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg text-gray-600 mb-4">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-4">{children}</h2>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};