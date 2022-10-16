import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { createAppointment } from "../dtos/inputs/create-appointment";
import { AppointmentModel } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";

@Resolver(()=> AppointmentModel)
export class Appointments{
    @Query(() => [AppointmentModel])
    async appointments(){
        return[
            {
                startsAt: new Date(),
                endsAt: new Date()
            }
        ];
    }

    @Mutation(()=> AppointmentModel)
    async createAppointment(@Arg('data') data: createAppointment){
        
        const appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt
        }
        return appointment
    }
    @FieldResolver(()=>Customer)
    async customer(@Root() appointment: Appointments){
        console.log(appointment)

        return {
            name: 'John Doe',
        }
    }
}