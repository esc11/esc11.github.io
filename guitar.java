import java.util.*;

public class GuitarString {
   private Queue<Double> ringBuffer = new LinkedList<Double>();
   public static final double DECAY_FACTOR = 0.996;
   
   public GuitarString(double frequency) {
      int capacity = (int) Math.round(StdAudio.SAMPLE_RATE / frequency);
      for (int i = 0; i < capacity; i++) {
         ringBuffer.add(0.0);
      }
      if (frequency <= 0 || ringBuffer.size() < 2) {
         throw new IllegalArgumentException();
      }
   }
   
   public GuitarString(double init[]) {
      for (int i = 0; i < init.length; i++) {
         ringBuffer.add(init[i]);
      }
   }
   
   public void pluck() {
      Random rand = new Random();
      for (int i = 0; i <= ringBuffer.size(); i++) {
         double n = rand.nextDouble() - 0.5;
         ringBuffer.remove();
         ringBuffer.add(n);
      }
   }
   
   public void tic() {
      double first = ringBuffer.remove();
      double second = ringBuffer.peek();
      ringBuffer.add(((first + second) / 2) * DECAY_FACTOR);
   }
   
   public double sample() {
      return ringBuffer.peek();
   }
}