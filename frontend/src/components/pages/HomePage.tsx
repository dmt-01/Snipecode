import { useGetAllUsers } from "../../core/useGetAllUsers";

interface Users {
  id_users: number;
  mdp: string;
  pseudo: string;
  email: string;
}

interface ListUsers {
  success: boolean;
  data: Users[];
}

function Homepage() {
  const { data, isLoading, isError, errorMsg } = useGetAllUsers<ListUsers>();

  if (isLoading) return <p>Chargement...</p>;
  if (isError) return <p>Erreur : {errorMsg}</p>;

  return (
    <div>
      <h1>Liste des utilisateurs 1</h1>
      <ul>
        {data?.data?.map((user) => (
          <li key={user.id_users}>
            {user.pseudo} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Homepage;
