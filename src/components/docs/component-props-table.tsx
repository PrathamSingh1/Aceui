import { type ComponentProp } from "@/types/registry";

interface ComponentPropsTableProps {
  props: ComponentProp[];
}

export function ComponentPropsTable({ props }: ComponentPropsTableProps) {
  if (props.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
      <table className="w-full text-sm">
        <thead className="bg-neutral-50 dark:bg-neutral-900">
          <tr>
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left font-medium text-neutral-600 dark:text-neutral-400"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="px-4 py-3 font-mono text-xs text-neutral-900 dark:text-neutral-100">
                {prop.name}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-violet-600 dark:text-violet-400">
                {prop.type}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-neutral-500">
                {prop.default}
              </td>
              <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
