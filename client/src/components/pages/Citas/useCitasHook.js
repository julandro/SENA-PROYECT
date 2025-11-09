import { useEffect, useState } from 'react';
import { useCitas } from '../../../contexts/CitasContext';
import api from '../../../services/api';
import { useAuth } from '../../../contexts/AuthContext';

const citaInicial = {
  _id: '',
  servicio: '',
  descripcion: '',
  fechaInicial: '',
  fechaFinal: '',
};

export default (handleOpen) => {
  const { user } = useAuth();
  const { citasProgramadas, setCitasProgramadas, setRefresh, refresh } =
    useCitas();
  const [listCitas, setListCitas] = useState([]);
  const [cita, setCita] = useState(citaInicial);

  useEffect(() => {
    setListCitas(
      citasProgramadas.map((value) => ({
        title: value.servicio,
        start: value.fechaInicial,
        end: value.fechaFinal,
        extendedProps: { descripcion: value.descripcion, _id: value._id },
      }))
    );
    console.log({ listCitas });
  }, [citasProgramadas, refresh]);

  const handleSelect = (info) => {
    handleOpen('add');
    setCita({
      fechaInicial: new Date(info.start),
      fechaFinal: new Date(info.end),
    });

    info.view.calendar.unselect();
  };

  const handleEventClick = (info) => {
    console.log(info);

    handleOpen('edit');
    setCita({
      _id: info.event.extendedProps._id,
      servicio: info.event.title,
      descripcion: info.event.extendedProps.descripcion,
      fechaInicial: info.event.start,
      fechaFinal: info.event.end,
    });
  };

  const editarCita = async () => {
    const validacion = cita.servicio && cita.fechaInicial && cita.fechaFinal;
    if (!validacion) throw new Error();

    setRefresh((prev) => !prev);
    await api.post('/citas/editarCita', { userId: user._id, cita });
    handleOpen(null);
  };

  const eliminarCita = async () => {
    await api.post('/citas/eliminarCita', { citaId: cita._id });
    setRefresh((prev) => !prev);
    handleOpen(null);
  };

  const addCita = async () => {
    const validacion = cita.servicio && cita.fechaInicial && cita.fechaFinal;
    if (!validacion) throw new Error();

    await api.post('/citas/programarCita', { userId: user._id, ...cita });
    setRefresh((prev) => !prev);
    handleOpen(null);
  };

  const handleChangeCita = (e) => {
    const { name, value } = e.target;
    setCita((prev) => ({ ...prev, [name]: value }));
  };

  return {
    listCitas,
    handleSelect,
    addCita,
    handleChangeCita,
    cita,
    handleEventClick,
    editarCita,
    eliminarCita,
  };
};
