import { Link } from "react-router";
import { Tradition } from "../dances";

export function DanceTable({ tradition }: { tradition: Tradition }) {
  return (
    <table>
      {tradition.dances.map((dance) => (
        <tr>
          <td className="pr-4">
            <Link to={`/${tradition.key}/${dance.key}`}>{dance.name}</Link>
          </td>
          <td>
            {dance.stick && "Stick"}
            {dance.stick && dance.hanky && "/"}
            {dance.hanky && "Hanky"}
          </td>
        </tr>
      ))}
    </table>
  );
}
