import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Slider from 'react-native-sliders';

const LoanCalculator = () => {
  const [amount, setAmount] = useState(7500);
  const [years, setYears] = useState(2.5);
  const [interestRate, setInterestRate] = useState(10); // annual interest rate in %
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const formatYears = value => {
    if (value % 1 === 0.5) return `${Math.floor(value)} ½`;
    return value.toString();
  };

  // Calculate monthly repayment whenever amount or years changes
  useEffect(() => {
    const r = interestRate / 100 / 12; // monthly rate
    const n = years * 12; // number of payments
    const M = amount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(isFinite(M) ? M : 0);
  }, [amount, years, interestRate]);

  // Render intermediate ticks
  const renderTicks = steps => (
    Array.from({ length: steps }, (_, i) => <View key={i} style={styles.tick} />)
  );

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000' }}>
      <View style={styles.gradientWrapper}>
        <LinearGradient
          colors={['#f60367', '#383b7e']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <View style={styles.card}>
            <View style={styles.cardContent}>
              
              {/* Amount Section */}
              <View style={styles.row}>
                <Text style={styles.labelText}>I want to borrow </Text>
                <Text style={styles.amountText}>£{amount.toFixed(2)}</Text>
              </View>

              <Slider
                style={styles.slider}
                minimumValue={1000}
                maximumValue={20000}
                step={100}
                value={amount}
                onValueChange={value => setAmount(Number(value))}
                minimumTrackTintColor="#F5D5E1"
                maximumTrackTintColor="#F5D5E1"
                thumbTintColor="#f60367"
                thumbStyle={{ height: 30, width: 30, borderRadius: 30 }}
              />

              {/* Years Section */}
              <View style={styles.row2}>
                <Text style={[styles.labelText, { marginRight: 10 }]}>over </Text>
                <Text style={styles.amountText}>
                  {formatYears(years)} years
                </Text>
              </View>

              <View style={styles.sliderWrapper}>
                <View style={styles.ticksContainer}>
                  {renderTicks(4)}
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={1}
                  maximumValue={5}
                  step={0.5}
                  value={years}
                  onValueChange={value => setYears(Number(value))}
                  minimumTrackTintColor="#F5D5E1"
                  maximumTrackTintColor="#F5D5E1"
                  thumbTintColor="#f60367"
                  thumbStyle={{ height: 30, width: 30, borderRadius: 30 }}
                />
              </View>
            </View>

            {/* Result Section */}
            <View style={styles.resultBox}>
              <View style={styles.resultItem}>
                <Text style={styles.resultValue}>{interestRate}%</Text>
                <Text style={styles.resultLabel}>Interest rate</Text>
              </View>

              <View style={styles.resultItem}>
                <Text style={styles.resultValue}>
                  £{monthlyPayment.toFixed(2)}
                </Text>
                <Text style={styles.resultLabel}>Monthly repayment</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>

      {/* Bottom Black container */}
      <View style={styles.bottomBlackStrip}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get your quote »</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientWrapper: { width: '100%', flex: 8.5 },
  bottomBlackStrip: { width: '100%', flex: 1.5, justifyContent: 'center', alignItems: 'center' },
  gradient: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: {
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  cardContent: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 30,
    paddingBottom: 15,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  row2: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: 10,
  },
  labelText: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
  },
  amountText: {
    color: '#999',
    fontSize: 25,
    fontWeight: '300',
    fontFamily: 'OpenSans-Regular',
  },
  sliderWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  slider: {
    width: '90%',
    alignSelf: 'center',
    zIndex: 1,
  },
  ticksContainer: {
    position: 'absolute',
    top: 12,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 0,
  },
  tick: {
    width: 5,
    height: 15,
    backgroundColor: '#F5D5E1',
    borderRadius: 2,
  },
  resultBox: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingTop: 23,
    paddingBottom: 20,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    overflow: 'hidden',
  },
  resultItem: { flex: 1, alignItems: 'center' },
  resultValue: {
    color: '#999',
    fontSize: 35,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '300',
  },
  resultLabel: {
    color: '#000',
    fontSize: 11,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#f60367',
    borderRadius: 5,
    width: '85%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '600',
  },
});

export default LoanCalculator;
