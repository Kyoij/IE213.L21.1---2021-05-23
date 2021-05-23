import { model, Schema } from 'mongoose';

type Flower = {
    name: string;
    description: string;
    image: string;
};

const FlowerSchema = new Schema<Flower>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});
FlowerSchema.index(
    { name: 'text', description: 'text' },
    {
        weights: {
            name: 5,
            description: 1,
        },
    }
);
export const Flower = model<Flower>('Flower', FlowerSchema);
