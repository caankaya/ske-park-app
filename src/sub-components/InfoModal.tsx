import { toggleInfoModal } from "../redux/reducers/header";
import { useAppDispatch, useAppSelector } from "../redux/types";

export default function InfoModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.header.infoModal);
  return (
    <dialog
      open={isOpen}
      className="fixed inset-0 z-20 h-screen w-full bg-primary/70"
    >
      <div
        className="absolute left-1/2 top-1/2 m-auto h-[95%] w-1/2 -translate-x-1/2 -translate-y-1/2 transform overflow-y-scroll rounded-xl bg-secondary p-5 shadow-xl"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <form method="dialog">
          <button
            className="absolute right-2 top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-secondary"
            onClick={() => {
              dispatch(toggleInfoModal(false));
            }}
          >
            ✕
          </button>
        </form>
        <div>
          <p className="mb-2 text-center font-bold uppercase">
            SKE-PARK : Application de Gestion de Parking 🚗🅿️
          </p>
          <p className="mb-2 text-sm">Bonjour à toute l'équipe de SKEEZI 🙋‍♂️</p>
          <p className="text-sm">
            Afin de mieux vous expliquer l'application, veuillez éteindre vos
            appareils électroniques, sauf celui sur lequel vous lisez ce texte
            🙃
          </p>
          <p className="text-sm">
            Pendant que vous lisez ce texte, je seraiiiii... non, ce n'est pas
            le bon scénario 🤔
          </p>
          <p className="text-sm">
            Si vous fermez cette modal par mégarde, il suffit de cliquer sur le
            bouton d'information ℹ️ qui bondit sans arrêt dans le header 🎯
          </p>
          <p className="text-sm">
            Assez parlé, passons aux choses sérieuses ⚡
          </p>
          <p className="my-2 text-sm">
            <span className="font-medium">Côté front-end :</span> j'essaies de
            vous montrer la création de composants et sous-composants,
            utilisation d'un router, mise en page, passage de props, typage avec
            TypeScript, gestion des états avec Redux et des états locaux,
            gestion des différentes erreurs, requêtes asynchrones "GET" &
            "POST". ⚛️💻
          </p>
          <p className="my-2 text-sm">
            <span className="font-medium">Côté back-end :</span> j'essaie de
            vous montrer ma maîtrise en création d'API, gestion des bases de
            données avec Prisma, et mise en place d'une logique serveur
            efficace. 📡 Création des contrôleurs, modules et services, gestion
            des requêtes vers la base à l'aide de Prisma, et validation des
            données avec des schémas (DTO) grâce à ValidationPipe. 🛠️ De plus,
            je gére les erreurs globales et m'assurer de la robustesse de
            l'architecture. 🚨 Enfin, la gestion des migrations de base de
            données et l'orchestration des tests unitaires.
          </p>
          <p className="my-2 font-medium">Technos principales</p>
          <div className="flex gap-x-5">
            <ul className="text-sm">
              <li className="font-medium">Front-end</li>
              <li>React</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
              <li>Axios</li>
            </ul>
            <ul className="text-sm">
              <li className="font-medium">Back-end</li>
              <li>NestJS</li>
              <li>Prisma</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <p className="my-2 font-medium">Structure de la base de données</p>
          <p className="mb-2 text-sm">
            On va trouver 3 entités dans la base : <em>Vehicle</em>,{" "}
            <em>Spot</em>, <em>Ticket</em>
          </p>
          <div className="flex flex-col gap-y-5">
            <ul className="text-sm">
              <li>
                <span className="font-medium">Vehicle</span> (Véhicule)
              </li>
              <li>
                <span className="font-medium">immatriculation</span>: C'est
                l'identifiant primaire du véhicule. Chaque véhicule a une plaque
                d'immatriculation unique qui le distingue.
              </li>
              <li>
                <span className="font-medium">type:</span> Enumération qui
                définit le type de véhicule (Car ou Motor).
              </li>
              <li>
                <span className="font-medium">tickets:</span> Relation avec le
                modèle Ticket (un véhicule peut avoir plusieurs tickets mais pas
                en même temps).
              </li>
            </ul>
            <ul className="text-sm">
              <li>
                <span className="text-medium font-medium">Spot</span> (Place)
              </li>
              <li>
                <span className="text-medium font-medium">number</span>:{" "}
                Identifiant unique pour chaque place (de type entier).
              </li>
              <li>
                <span className="text-medium font-medium">state:</span> Champ
                booléen indiquant si la place est disponible (true) ou non
                (false).
              </li>
              <li>
                <span className="text-medium font-medium">tickets:</span>{" "}
                Relation avec le modèle Ticket (une place peut avoir plusieurs
                tickets mais en même temps).
              </li>
            </ul>
            <ul className="text-sm">
              <li className="font-medium">Ticket</li>
              <li>
                <span className="font-medium">reference :</span> Identifiant
                unique du ticket de type String. Il représente le code ou numéro
                de référence unique pour chaque ticket.
              </li>
              <li>
                <span className="font-medium">start_time :</span> Champ de type
                DateTime (optionnel) qui enregistre le moment où le ticket a été
                émis.
              </li>
              <li>
                <span className="font-medium">spot :</span> Relation avec le
                modèle Spot, indiquant à quelle place de stationnement ce ticket
                est associé. Ce champ est lié à la clé étrangère spot_number,
                qui référence le numéro de la place (number dans Spot).
              </li>
              <li>
                <span className="font-medium">spot_number :</span> Clé étrangère
                qui lie le ticket à un numéro de place (Spot).
              </li>
              <li>
                <span className="font-medium">vehicle :</span> Relation avec le
                modèle Vehicle, indiquant à quel véhicule ce ticket est associé.
                Ce champ est lié à la clé étrangère id_vehicle, qui référence
                l'immatriculation du véhicule.
              </li>
              <li>
                <span className="font-medium">id_vehicle :</span> Clé étrangère
                qui fait référence à l'immatriculation du véhicule.
              </li>
            </ul>
            <ul className="text-sm">
              <li>
                <span className="font-medium">Enum VehicleType</span> définit
                les types de véhicules
              </li>
              <li>
                <span className="font-medium">Car :</span> Représente les
                voitures.
              </li>
              <li>
                <span className="font-medium">Motor :</span> Représente les
                motos.
              </li>
            </ul>
          </div>
          <p className="my-2 font-medium">Relations et Cardinalités</p>
          <p className="mb-2 text-sm font-medium">Vehicle et Ticket </p>
          <p className="text-sm">
            <span className="font-medium">Relation :</span> Un véhicule
            (Vehicle) peut avoir plusieurs tickets (Ticket).
          </p>
          <p className="text-sm">
            <span className="font-medium">Cardinalité : 1</span> (Vehicle) à N
            (Ticket).{" "}
          </p>
          <p className="text-sm">
            <span className="font-medium">Clé étrangère :</span> Le champ
            id_vehicle dans le modèle Ticket fait référence à la clé primaire
            immatriculation dans le modèle Vehicle. En cas de suppression d'un
            véhicule, les tickets associés sont supprimés automatiquement
            (onDelete: Cascade).
          </p>
          <p className="my-2 text-sm font-medium">Spot et Ticket</p>
          <p className="text-sm">
            <span className="font-medium">Relation :</span> Une place de
            stationnement (Spot) peut avoir plusieurs tickets (Ticket).
          </p>{" "}
          <p className="text-sm">
            <span className="font-medium">Cardinalité : 1</span> (Spot) à N
            (Ticket).{" "}
          </p>
          <p className="text-sm">
            <span className="font-medium">Clé étrangère :</span> Le champ
            spot_number dans le modèle Ticket fait référence à la clé primaire
            number dans le modèle Spot.
          </p>
          <p className="my-2 text-sm font-medium">Ticket, Vehicle et Spot </p>
          <p className="text-sm">
            <span className="font-medium">Relation :</span> Chaque ticket
            (Ticket) est associé à une seule place (Spot) et à un seul véhicule
            (Vehicle).
          </p>
          <p className="text-sm">
            <span className="font-medium">Cardinalité :</span> N (Ticket) à 1
            (Vehicle) et N (Ticket) à 1 (Spot). Cela garantit qu'un ticket
            correspond à une place et un véhicule spécifique à un moment donné.
          </p>
          <button
            className="m-auto block h-8 w-40 rounded-md bg-info text-sm text-secondary"
            onClick={() => {
              dispatch(toggleInfoModal(false));
            }}
          >
            Fermer la modal
          </button>
        </div>
      </div>
    </dialog>
  );
}
